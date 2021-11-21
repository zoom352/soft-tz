

const Button = ({area}) => {

    const letMap = area.map((ar) => {
        return ar.title
    })


    const download = () => {
        const blob = new Blob([JSON.stringify(letMap)])
        const link = document.createElement('a')
      
        link.href = window.URL.createObjectURL(blob)
        link.download = 'fileName.json'
        link.click()
      }
    
 

    return <div>
        {/* <p id="text-val" rows="4">{letMap}</p><br/> */}
        {/* <input onClick={download} type="button" id="dwn-btn" value="Download dinamically generated text file"/> */}
        <button className='btn' onClick={download}>Скачать</button>
    </div>
}

export default Button;