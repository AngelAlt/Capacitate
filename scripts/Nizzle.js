//nizzle

function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms))}

function charge(i) {
  alert(["Charging for ",i," Seconds"])
  sleep((i * 1000)).then(() => {
    alert("D0ne")
  })
  return i
}

function nozzle(hit) {
  charge(hit)
  alert("Diss")
}
