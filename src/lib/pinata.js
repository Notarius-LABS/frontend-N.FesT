const key = "fa91ad4b189cdfd8735d"
const secret = "8a34cb3f444018d93e76240555e68b143f37a48534c0a62c3ac76b16921c1f1f"

import axios from 'axios'

export const deleteFileToIPFS = async (ipfsImageHash) => {

  await axios.delete(`https://api.pinata.cloud/pinning/unpin/${ipfsImageHash}`, {
    headers: {
      pinata_api_key: key,
      pinata_secret_api_key: secret,
    },
  })
    
}

export const deleteJSONToIPFS = async (ipfsJsonHash) => {
  await axios.delete(`https://api.pinata.cloud/pinning/unpin/${ipfsJsonHash}`, {
    headers: {
      pinata_api_key: key,
      pinata_secret_api_key: secret,
    },
  })
}

export const pinJSONToIPFS = async (json, pinataMetaDataJSON) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`

  const data = JSON.stringify({
    pinataContent: json,
    pinataMetadata: pinataMetaDataJSON
  })

  return axios
    .post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        pinata_api_key: key,
        pinata_secret_api_key: secret,
      },
    })
    .then(function (response) {
      return response.data.IpfsHash
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const pinFileToIPFS = async (file, pinataMetaData) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`

  let data = new FormData()

  data.append('file', file)
  data.append('pinataMetadata', JSON.stringify(pinataMetaData))

  return axios
    .post(url, data, {
      maxBodyLength: 'Infinity',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        pinata_api_key: key,
        pinata_secret_api_key: secret,
      },
    })
    .then(function (response) {
      return response.data.IpfsHash
    })
    .catch(function (error) {
      console.log(error)
    })
    
}