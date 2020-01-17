document.getElementbyid('IssueInputForm').addEventListener('submit',saveIssue);

function saveIssue(e){
   var issueDesc = document.getElementById('issueDescInput').Value;
   var issueSeverity = document.getElementById('issueSeverityInput').Value;
   var issueAssignedto = document.getElementById('issueAssigneToInput').Value;
   var issueId = chance.guid();
   var issueStatus = 'Open';


   var issue ={
      id: issueId,
      description: issueDesc,
      Severity: issueSeverity,
      assignedTo: issueAssignedto,
      status: issueStatus
   }
     
   if(localStorage.getItem('issues')==null){

      var issues = [];
      issues.push(issue);
      localStorage.setItem('issues',JSON.stringify(issues));

   }else {
      var issues = JSON.parse(localStorage.getItem('issues'));
      issues.push(issue);
      localStorage.setItem('issues',JSON.stringify(issues));


   }
      document.getElementById('issueinputform').reset();
      fetchIssues();

      e.preventDefault();
      

}
function fetchIssues(){
   var issues = JSON.parse(localStorage.getItem('issues'));
   var issuesliste = document.getElementById('issuesList');

issuesList.innerHTML ='';

for(var i= 0;i< issues.length;i++){
    var id = issues[i].id;
    var desc =issues[i].description;
    var severity = issues[i].severity;
    var assignedto = issues[i].assignedTo;
    var status = issues[i].status;


    issuesList.innerHTML = '<div class="well">' + 
      '<h6>Issue id :' + id + '</h6>'+
      '<p><span class="label label-info">' + status + '</span>'
     '<h3>' + desc + '</h3>' +
     '<p><span class="glyphican glyphicon-time"></span>'
     + severity + '<p>' + '<p><span class="glyphican glyphicon-user"></span>' + assignedTo
     + '</p>'  +   '<a href="#" class ="btn btn-warning>USER</a>'
     + '<a href="#" onclick="setstatusClosed(\''+id+'\')" class ="btn btn-warning">Close</a>'
     +  '<a href="#" onclick="deleteIssue(\''+id+'\')" class ="btn btn-danger">Delete</a>'
     <div>
     + '<a href="#" class ="btn btn-warning">Close</a>'



}

}