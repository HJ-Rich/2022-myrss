import {useSearchParams} from "react-router-dom";

function OAuthGithubCallback() {
    const [searchParams, setSearchParams] = useSearchParams();
    const code = searchParams.get("code");

    var requestOptions = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"code": code}),
    };

    fetch("http://localhost:8080/api/auth/login", requestOptions)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            window.location.href = '/'
        })
        .catch(error => console.log('error', error));

    return (
        <div>로그인 중입니다..</div>
    );
}

export default OAuthGithubCallback;
