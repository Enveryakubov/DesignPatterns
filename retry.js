// Create a custom delay
const delay = (ms) => new Promise((res) => setTimeout(() => res(), ms));

async function retryOperation() {
  retryCount = 0;

  while (true) {
    try {
      externalServiceCall();
      console.log('Succeeded!');
      break;
    } catch (error) {
      retryCount++;
      console.log(`Failed attempt ${retryCount}`);

      if (retryCount > 10) {
        console.log('The maximum retry number is reached!');
        break;
      }
    }
    await delay(1000);
  }
}

// Simulating a call to external api
function externalServiceCall() {
  let result = Math.random() < 0.2;
  if (result) {
    return true;
  } else {
    throw 'Failure';
  }
}

retryOperation();
