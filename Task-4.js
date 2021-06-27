const STATES = {
  ERROR: 'error',
  PROCESSING: 'processing',
  SUCCESS: 'success',
};
const ERRORS = {
  INCORRECT_DETAILS: 'INCORRECT_DETAILS',
  NO_STOCK: 'NO_STOCK',
};
const DELAY = 2_000; // 2 seconds

/**
 * Gets the processing page
 * @param {array} data
 */
const getProcessingPage = async data => {
  let message;
  let title;

  for ({ state, errorCode } of data) {
    switch (state) {
      case STATES.PROCESSING:
        await new Promise(resolve => setTimeout(resolve, DELAY));
        break;

      case STATES.ERROR:
        title = 'Error page';
        if (errorCode === ERRORS.INCORRECT_DETAILS) {
          message = 'Incorrect details have been entered';
        } else if (errorCode === ERRORS.NO_STOCK) {
          message = 'No stock has been found';
        } else if ([null, undefined].includes(errorCode)) {
          message = null;
        }
        break;

      case STATES.SUCCESS:
        message = null;
        title = 'Order complete';
        break;

      default:
        message = null;
        title = null;
    }
  }

  return Promise.resolve({ title, message });
};

getProcessingPage([{ state: 'processing' }, { state: 'error' }]).then(response => {
  console.log('response:', response);
});