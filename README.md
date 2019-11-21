#Process Documentation
1. Dependencies Used 
  fs.js: This is a filestream library to access/modiy the file from local machine. It is used to save the output of file that was crawled.
  Nightmare.js: Nightmare is used to modiy or browse web pages server side. Its is used to execute the script from webpage on the server. 
2. Using Nightmare.Js we fetch the web page from the frontend wait for the script to get executed on the server and the using fs.js we save the file in 
  output folder in current directory.
3. Varaible path can be configured to define custom location for output file. 
4. Variable filename can be configured to define file name for output file.


#Getting started (Installation)
1. Install Node.Js
2. Go to root of the directory
3. Install Dependencies: 'npm i nightmare fs'
4. Start by executing: 'npm start' 