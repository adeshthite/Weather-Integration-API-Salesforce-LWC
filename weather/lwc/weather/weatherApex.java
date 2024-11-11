public class weatherApex {
    
    @AuraEnabled
   public static String getWeatherData(String city) {
       
       HttpRequest req = new HttpRequest();
       req.setEndpoint('callout:WeatherApiNamedCred/current.json?q='+EncodingUtil.urlEncode(city,'UTF-8'));
       req.setMethod('GET');
       HttpResponse res = New HttpResponse();
       Http ht = new Http();
       res = ht.send(req);
       System.debug('--- Weather data---'+res.getBody());
		return res.getBody();
    }
}
