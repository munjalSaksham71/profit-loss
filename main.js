const buyingPrice = document.querySelector("#buying-price");
const presentPrice = document.querySelector("#present-price");
const quantity = document.querySelector("#quantity");
const outputAbsolute = document.querySelector("#output-absolute");
const outputPercentage = document.querySelector("#output-percentage");
const submitButton = document.querySelector("#submit");

const check = (bPrice, pPrice) => pPrice - bPrice;

const submitHandler = () => {
  const bPrice = Number(buyingPrice.value);
  const pPrice = Number(presentPrice.value);
  const quan = Number(quantity.value);

  const calculate = check(bPrice, pPrice);

  if (calculate > 0) {
    outputAbsolute.innerText = `Your Profit is  Rs.${calculate * quan}`;
    const percentage = (calculate / bPrice) * 100;
    outputPercentage.innerText = `You Earn ${percentage}% 😎`;
  } else if (calculate == 0) {
    outputAbsolute.innerText = "No Profit, No Loss";
  } else {
    outputAbsolute.innerText = `You are in Loss of Rs.${-(calculate * quan)}`;
    const percentage = (-calculate / bPrice) * 100;
    outputPercentage.innerText = `You Lose ${percentage}% 😲`;
  }
}

submitButton.addEventListener("click", submitHandler);
