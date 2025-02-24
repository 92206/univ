These steps are ordered 
# network
docker network create univ-network
# for database
univ/postgres: docker build -t pg:1.0 .
docker run --rm  --network univ-network --name postgres-container -p 5432:5432  pg:1.0  
# to inspect data in db
docker exec postgres-container psql  -U admin -d mydatabase ; SELECT * FROM institution;  
# for backend
univ/backend: docker build -t backend:1.0 .  
docker run --rm  --name bc-server --network univ-network -p 8080:8080  backend:1.0

# for frontend 
docker build -t frontend-container:1.0 .
docker run --rm --name frontend-container -p 3000:3000 --network univ-network


# SCREENSHOTS:
![alt text](image-1.png)
Sucessful db startup 

![alt text](image-2.png)
successful backend startup

![alt text](image-3.png)
frontend successful startup

![alt text](image-4.png)
output of docker ps

output of docker images
![alt text](image-5.png)
![alt text](image-6.png)

successful communication between front & back and db 
![alt text](image-7.png)

![alt text](image-8.png)

