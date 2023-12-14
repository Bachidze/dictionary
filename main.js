const wre = document.querySelector('.wre')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const h3 = document.querySelector('h3')
const h4 = document.querySelector('h4')
const h5 = document.querySelector('h5')
const h6 = document.querySelector('h6')
const ul = document.querySelector('ul')
const mtvare = document.querySelector('.mtvare')
const mtavari = document.querySelector('.mtavari')
const span = document.querySelector('span')
const tetri = document.querySelector('.tetri')
const input = document.querySelector('input')
const source = document.querySelector('.source1')
const linki = document.querySelector('.linki')
const keyb = document.querySelector('.keyb')
const form = document.querySelector('form')
const bachi = document.querySelector('.bachi')
const xma = document.querySelector('.xma')





function darkmode(){
    document.body.classList.toggle('dark')
    h1.classList.toggle('white')
    h2.classList.toggle('white')
    source.classList.toggle('shecvla')
    h4.classList.toggle('white')
    h5.classList.toggle('white')
    h6.classList.toggle('white')
    ul.classList.toggle('white')
    linki.classList.toggle('purple1')
    keyb.classList.toggle('purple1')
    span.classList.toggle('white')
    mtvare.classList.toggle('night')
    mtavari.classList.toggle('purple')
    tetri.classList.toggle('change')
    input.classList.toggle('change1')
}

function clickrotate(){
    wre.addEventListener('click',()=>{
        wre.classList.toggle('rotate')
        darkmode()
        
    })
    
}

clickrotate()


 async function api(){

    try{
        let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)
        let data = await res.json()
        console.log(data)
        bachi.innerHTML = `
        <h1>${input.value}</h1>`
        h4.innerHTML = `
        <h4>${data[0].meanings[0].partOfSpeech}</h4>`

        linki.innerHTML = `
        <h3 class="linki">/${data[0].phonetics}/</h3>
        `

        ul.innerHTML = `
        <ul>
                 <li>(etc.) A set of keys used to operate a typewriter,
                     computer etc.</li>
                <li>A component of many instruments including the piano, 
                    organ, and harpsichord consisting of usually black
                     and white keys that cause different tones to be 
                     produced when struck.
                </li>
                <li>
                    A device with keys of a musical keyboard, used to
                     control electronic sound-producing devices which
                      may be built into or separate from the keyboard
                       device.
                </li> 
            </ul>`
        if(!res.ok){
            throw new Error(`error`)
        }   
    }catch(error){
        console.error('error')
    }

}


form.addEventListener('submit',(e)=>{
    e.preventDefault()

    let input1 = input.value

     api()

})

