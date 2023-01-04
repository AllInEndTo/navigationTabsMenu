function moveTo (id, position, color) {

    let floatingIcon1 = document.getElementById('floatingIcon1')
    let floatingIcon2 = document.getElementById('floatingIcon2')
    let floatingIcon3 = document.getElementById('floatingIcon3')
    let floatingIcon4 = document.getElementById('floatingIcon4')

    let icon = document.getElementsByClassName('icon')
    let navbarContainer = document.getElementById('navbarContainer')
    let bg = document.getElementById('bg')
    let bgFloatingIcon = document.getElementById('bgFloatingIcon')
    let floatingIcon = document.getElementById(`floatingIcon${id}`)
    let floatingIconSpan = floatingIcon.getElementsByTagName('span')


    bgFloatingIcon.style.cssText = 'bottom: -30px; transition: all .15s ease-out;'
    floatingIcon1.style.cssText = 'box-shadow: none; transform: translate(0px, 120%); opacity: 1; transition: all .1s ease-out;'
    floatingIcon2.style.cssText = 'box-shadow: none; transform: translate(0px, 120%); opacity: 1; transition: all .1s ease-out;'
    floatingIcon3.style.cssText = 'box-shadow: none; transform: translate(0px, 120%); opacity: 1; transition: all .1s ease-out;'
    floatingIcon4.style.cssText = 'box-shadow: none; transform: translate(0px, 120%); opacity: 1; transition: all .1s ease-out;'

    icon = [...icon]
    icon.map((icon) => {
        icon.style.cssText = 'opacity: 0; transition: all .05s ease-out;'
    })

    bgFloatingIcon.style.cssText = `left:${position}; transition: all .2s ease-in-out;`
    bgFloatingIcon.style.cssText += `bottom: -50px; transition: all .15s ease-out;`

    floatingIcon.style.cssText += `
    transform: translate(0px, 0%);
    box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 24%) 0px 1px 2px;
    opacity: 1;
    transition: all .3s ease-out;`

    floatingIconSpan[0].style.cssText += `
    opacity: .7;
    transform: translate (0px, 0%);
    color: ${color};
    transition: all .3s ease-out;`

    navbarContainer.style.cssText = `background-color: ${color}; transition: all .3s ease-in-out;`
    bg.style.cssText = `background-color: ${color}; transition: all .3s ease-in-out;`
    bgFloatingIcon.style.cssText += `background-color: ${color}; transition: all .3s ease-in-out;`
}