# Lottie Web

This will fail if the HTML file is loaded alone, because loading the JSON resource isn't allowed when loading a local file. But it works if the file is loaded through a server, e.g., by calling `ruby -run -e httpd -- -p 5000 .`.
