import http.server
import ssl

# Ruta al certificado y clave privada
cert_file = "certificate.pem"
key_file = "key.pem"

# Configuración del servidor HTTPs
server_address = ('', 8000)
httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)

# Configuración de SSL utilizando SSL
httpd.socket = ssl.wrap_socket(httpd.socket, certfile = cert_file, keyfile = key_file, server_side=True)

# Iniciar el servidor HTTPs
print("Servidor HTTPs en ejecución... (https://0.0.0.0:8000/)")
httpd.serve_forever()
