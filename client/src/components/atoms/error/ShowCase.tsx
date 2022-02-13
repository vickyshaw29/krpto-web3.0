import MainButton from '../button/MainButton';
import Styles from '../../../styles/commonStyles/styles';

const ShowCase = () => {
  const classes = Styles();

  const Reset = () => {
    window.localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <div className={classes.wrapper}>
        <div>
          <h1>Something Went Wrong</h1>
          <MainButton
            color="primary"
            buttonName="Reset"
            variant="contained"
            disabled={false}
            className="btnsmall"
            onClick={Reset}
          />
        </div>
      </div>
    </>
  );
};

export default ShowCase;
