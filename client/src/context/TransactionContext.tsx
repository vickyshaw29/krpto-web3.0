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
  console.log(provider, signer, transactionContract);
};

export const TransactionProvider = ({ children }: any) => {
  const [connectedAccount, setConnectedAccount] = useState('');
  const [loader, setLoader] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem('transactionCount')
  );
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
  //
  const checkIfWalletConnected = async () => {
    try {
      if (!ethereum) return alert('Please install metamask');
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      if (accounts.length) {
        setConnectedAccount(accounts[0]);
        // getAllTransactions
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
      console.log(connectedAccount)
      console.log(formData.addressTo)
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
    } catch (error) {
      throw new Error('No ethereum object');
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        connect: connectWallet,
        connectedAccount,
        formData,
        onChange,
        sendTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
