# sauravsood.com

Purchased the domain.
Helpful tutorial https://www.youtube.com/watch?v=k_0ZzvHbNBQ&list=PLillGF-RfqbYRpji8t4SxUkMxfowG4Kqp&index=1

# AWS
Used aws.amazon.com to create an EC2 instance.
You'll need to allow public access on a port on which your service will listen, used https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html to add a security group (for that specific port which needs to be opened to allow public access).
Create new ssh key using ssh keygen.

# Domain
Added the public IP address of the EC2 instance as the nameserver for the domain on the domain providers portal.

# Server
Upon adding IP address to the nameserver, incoming traffic reaches port 80 by default. Redirect incoming traffice from port 80 to the intended port on which you're hoping to run a service (used https://askubuntu.com/questions/444729/redirect-port-80-to-8080-and-make-it-work-on-local-machine).
Used the github repository https://github.com/sahat/hackathon-starter to create a node boiler plate on the instance.

# GitHub
Create a new repository
Add public key as authorized keys in github
Pushed cloned repository to the new one.
## Facing troubles with linking commits to the gitHub graph

# node
sudo npm install -g nodemon
npm update node
node -v
(npm run start&)
yarn start
yarn test
npm -v
sudo npm install npm@latest -g


In /User/sood folder - run the following command
git clone http://github.com/creationix/nvm.git .nvm

Helpful links
https://heynode.com/tutorial/install-nodejs-locally-nvm
https://www.codegrepper.com/code-examples/javascript/npm+start+error+code+1

sudo npm install --unsafe-perm -g node-sass

In repo folder, run
sudo npm install -g npm
npm install

To change the version of node
$ npm install -g n
$ n x.xx.x
