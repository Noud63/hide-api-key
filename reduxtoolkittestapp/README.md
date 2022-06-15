<h1>Hide API Key backend (React/Redux/Toolkit)

Unfortunately, keeping any key in your React client, even if you are using gitignore and an .env file, is not secure. React environment variables are embedded in the build and are publicly accessible.<br>

You should really only save API keys or secrets in your backend such as Node / Express. You can have your client send a request to your backend API, which can then make the actual API call with the API key and send the data back to your client.<br>

I used the free <a href='https://docs.thecatapi.com' target='blank'> Cat Api </a> to demonstrate how to do this.<br>
