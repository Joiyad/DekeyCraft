import { ethers } from "ethers";

import abi from "./Keyboards.json"

const contractAddress = '0xce440e70963ce1e293253Bd9f5DAB836686c2203';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
