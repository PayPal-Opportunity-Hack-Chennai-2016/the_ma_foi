import DS from 'ember-data';

var ApplicationAdapter = DS.RESTAdapter.extend({
	host: "http://localhost:3000",
	buildURL: function(modelName, id, snapshot, requestType, query) {
      var qry = this._super();
      var params = {}
      params.userid = window.localStorage.getItem("userid");
      params.auth_token = window.localStorage.getItem("authtoken");
      qry = qry+'/'+modelName+'s';
      if(id){
      	qry=qry+'/'+id
      }
      qry = qry+'.json?'+jQuery.param( params );
      return qry;
    }
});
export default ApplicationAdapter;


