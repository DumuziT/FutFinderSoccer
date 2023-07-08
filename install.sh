sudo apt-get update
sudo apt-get install python3 -y
sudo apt-get install openssl -y
openssl genrsa -out key.pem 2048
openssl req -new -x509 -sha256 -key key.pem -out certificate.pem -days 365
