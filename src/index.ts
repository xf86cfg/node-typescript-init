const kickstart = () => {
  console.log('Kickstarted')
  return new Date()
}

const timestamp = kickstart()

console.log('At:', timestamp)

export { kickstart }
