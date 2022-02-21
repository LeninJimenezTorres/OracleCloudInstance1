NODEJS APP TO URL QUERIES


This is a Nodejs app to process a remote JSON database file and save that query file in a remote or local server. 

The original reporitory is public and based on a url GET method query of JSON files from OCI (Oracle Cloud Infrastructure) repositories.

The queries synthesize a big JSON database file and customize them acording a url query by GET method.

In a local server you can do the queries based on:

    http://localhost:2000/compare/:TRACKID/:M_SESSIONID_1/:M_SESSIONID_2

Where:
    - TRACKID: track id of racetrace path but the original repo do not use in a personalized query. 
    - M_SESSIONID_1: this is the url parameter of the original remote url query, here we are going to compare two, this is the first player/competitor SessionID.
    - M_SESSIONID_1: this is the second player/competitor SessionID.

    Example: http://localhost:3000/compare/1/14112933445202903173/15010144713596184927


The original remote query repository use this structure only to a single session query, and this url address is:
    
    https://apigw.withoracle.cloud/formulaai/carData/:session/:lap/:sector

    Where:
    - session (mandatory) - unique game session id (accessible from Session API)
    - lap (mandatory) - lap number (1 is the first lap)
    - sector (optional) - sector number (0 to 2)

    Example:  https://apigw.withoracle.cloud/formulaai/carData/1127492326198450576/1
    
