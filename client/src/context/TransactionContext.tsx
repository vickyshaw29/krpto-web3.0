import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/constants';
declare let window: any;
interface TransactDetails {
  connect: () => any;
  connectedAccount: any;
  formData: any;
  onChange: (e: any) => any;
  sendTransaction: () => any;
  transactions: [];
  loader: boolean;
}

export const TransactionsContext = React.createContext<
  Partial<TransactDetails>
>({});
const { ethereum } = window;

const getEhereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  return transactionContract;
};

export const TransactionProvider = ({ children }: any) => {
  const [connectedAccount, setConnectedAccount] = useState('');
  const [loader, setLoader] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem('transactionCount')
  );
  const [transactions, setTransactions] = useState<any>([]);
  //   form
  const [formData, setFormData] = useState({
    addressTo: '',
    amount: '',
    keyword: '',
    message: '',
  });
  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // getting all the transactions

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionContract: any = getEhereumContract();
        const availableTransactions =
          await transactionContract.getAllTransactions();

        const customTransactions = availableTransactions.map(
          (transaction: any) => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(
              transaction.timestamp.toNumber() * 1000
            ).toLocaleString(),
            message: transaction.message,
            keyword: transaction.keyword,
            amount: parseInt(transaction.amount._hex) / 10 ** 18,
          })
        );
        setTransactions(customTransactions);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //
  const checkIfWalletConnected = async () => {
    try {
      if (!ethereum) return alert('Please install metamask');
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      if (accounts.length) {
        setConnectedAccount(accounts[0]);
        getAllTransactions();
      } else {
        console.log('no account found');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      console.log('hey vicky!');
      if (!ethereum) return alert('Please install metamask');
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      console.log(accounts, ';;;;;');
      setConnectedAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error('No Ethereum object.');
    }
  };

  //   sending transaction
  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert('Please install metamask');
      const { addressTo, amount, keyword, message } = formData;
      const transactionContract: any = getEhereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);
      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: connectedAccount,
            to: addressTo,
            gas: '0x5208', //2100 GWEI
            value: parsedAmount._hex,
          },
        ],
      });
      setLoader(true);
      const tranactionHash = await transactionContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );
      await tranactionHash.wait();
      setLoader(false);
      console.log(`success ${tranactionHash.hash}`);
      const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());
      setFormData({
        addressTo: '',
        amount: '',
        keyword: '',
        message: '',
      });
    } catch (error) {
      setFormData({
        addressTo: '',
        amount: '',
        keyword: '',
        message: '',
      });
      throw new Error('No ethereum object');
    }
  };
  //
  const checkIfTransactionExists = async () => {
    try {
      const transactionContract: any = getEhereumContract();
      const transactionCount = await transactionContract.getTransactionCount();
      window.localStorage.setItem('transactionCount', transactionCount);
    } catch (error) {
      throw new Error('No ethereum object');
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, [loader]);
  useEffect(()=>{
    checkIfTransactionExists();
  },[])
  return (
    <TransactionsContext.Provider
      value={{
        connect: connectWallet,
        connectedAccount,
        formData,
        onChange,
        sendTransaction,
        transactions,
        loader,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
