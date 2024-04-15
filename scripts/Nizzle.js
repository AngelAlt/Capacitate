//nizzle

export function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms))}

export function charge(i) {
  alert(["Charging for ",i," Seconds"])
  sleep((i * 1000)).then(() => {
    alert("D0ne")
  })
  return i
}

export function nozzle(hit) {
  charge(hit)
  alert("Diss")
}
