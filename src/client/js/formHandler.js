import { checkForUrl } from './urlChecker'


function handleSubmit(event) {
    event.preventDefault()   
    let formText = document.getElementById('article-url').value
    if(Client.checkForUrl(formText)){
        console.log("::: Form Submitted :::")
        postData('http://localhost:8081/evaluate', {url: formText})
    
        .then(function(res) {
            document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`;
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
            document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
            document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
            document.getElementById('score_tag').innerHTML = `Score_tag: ${res.score_tag}`;
        })
        } else {
            alert('Please try a valid url!');
        }
}

const postData = async (url = "", data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log(newData)
        return newData;
    } catch (error) {
        console.log('error', error);
    }
}

export { handleSubmit }