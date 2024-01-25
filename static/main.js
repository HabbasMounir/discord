let hidden=document.querySelectorAll(".hidden")


hidden.forEach(e =>visibilehandle(e) )

document.addEventListener("scroll", ()=>hidden.forEach(e =>visibilehandle(e) ) )



  function isInView(element) {
    const ClientRect = element.getBoundingClientRect()
    let y = window.innerHeight / 2
    return  ClientRect.top >= 0 && y>=ClientRect.top
}
  function visibilehandle(element) {isInView(element)&&element.classList.add("visibile")}