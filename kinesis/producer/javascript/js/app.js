var cognitoSyncClient = null;

AWS.config.region = 'eu-west-1';
var cognitoParams = {
    AccountId: '1950-0958-2361',
    IdentityPoolId: 'eu-west-1:61d19d68-122e-463b-9a00-46308f5bb409',
    RoleArn: 'arn:aws:iam::195009582361:role/Cognito_clgtest_poolUnauth_Role'
};

AWS.config.credentials = new AWS.CognitoIdentityCredentials(cognitoParams);

AWS.config.credentials.get(function(err) {
    if (!err) {
        cognitoSyncClient = new AWS.CognitoSyncManager();
        console.log(cognitoSyncClient);
    }
});

AWS.config.credentials.get(function(err) {
  if (!err) {
    var id = AWS.config.credentials.identityId;
    console.log("Cognito Identity Id:", id);
  }
});

/*
cognitoSyncClient.openOrCreateDataset('myDatasetName', function(err, dataset){
    dataset.put('newRecord', 'newValue', function(err, record) {
        console.log(record);
    });
    
    dataset.synchronize({
        onSuccess: function(dataset, newRecords) {
         //...
      },
    
      onFailure: function(err) {
         //...
      },
    
      onConflict: function(dataset, conflicts, callback) {
    
         var resolved = [];
    
         for (var i=0; i<conflicts.length; i++) {
    
            // Take remote version.
            resolved.push(conflicts[i].resolveWithRemoteRecord());
    
            // Or... take local version.
            // resolved.push(conflicts[i].resolveWithLocalRecord());
    
            // Or... use custom logic.
            // var newValue = conflicts[i].getRemoteRecord().getValue() + conflicts[i].getLocalRecord().getValue();
            // resolved.push(conflicts[i].resovleWithValue(newValue);
    
         }
    
         dataset.resolve(resolved, function() {
            return callback(true);
         });
    
         // Or... callback false to stop the synchronization process.
         // return callback(false);
    
      },
    
      onDatasetDeleted: function(dataset, datasetName, callback) {
    
         // Return true to delete the local copy of the dataset.
         // Return false to handle deleted datasets outsid ethe synchronization callback.
    
         return callback(true);
    
      },
    
      onDatasetMerged: function(dataset, datasetNames, callback) {
    
         // Return true to continue the synchronization process.
         // Return false to handle dataset merges outside the synchroniziation callback.
    
         return callback(false);
    
      }
    });
    
    dataset.get('newRecord', function(err, value) {
        console.log('newRecord: ' + value);
    });
});*/