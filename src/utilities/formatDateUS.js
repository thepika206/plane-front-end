const formatDateMMDDYYYY = (date)=>{
  const dateArr = date.split('-')
  return `${dateArr[1]}-${dateArr[2]}-${dateArr[0]}`
}

export {
  formatDateMMDDYYYY as formatDateUS
}