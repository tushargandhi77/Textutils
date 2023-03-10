

export default function About(props) {
    let myStyle = {
        color:props.mode==='dark'?'white':'#262829',
        backgroundColor: props.mode ==='dark'?'#262829':'white'
    }
  return (
    <>
            <div className='container' style={myStyle}>
                <h1 my-3>About us</h1>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                About Text utils
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>TextUtils Helps to Analyse Text</strong> Clean and simple UI of this app which you are used In this app to become good user friendly to everyone here its comes with different features like dark mode and etc
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                What It Do?
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>You can do many operations with texts</strong> convert sentance to upper case and lowercase , Handling extra spaces and Clearing text in the sentance , Counting words , charecters. You can also see time to reading text.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Contact Us
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Developer-Tushar Gandhi <br />
                Gamil-gandhitushar509@gmail.com
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

