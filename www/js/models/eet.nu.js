angular.module('diningapp').factory('eetNu', ['$http',
    function($http) {
        return {
            getRestaurants: function(callback, params) {
                var url = 'https://api.eet.nu/venues?max_distance=5';
                console.log(params);
                if (params) {
                    if (params.lat && params.lng) {
                        url += '&geolocation=' + params.lat + ',' + params.lng;
                    }
                    console.log(url);
                    $http.get(url).then(function(res) {
                        console.log(url);
                        if (res.status === 200) {
                            window.localStorage['restaurants'] = JSON.stringify(res.data.results);
                            callback(res.data.results);
                        }
                    });
                }
                else if(window.localStorage['restaurants']){
                    callback(JSON.parse(window.localStorage['restaurants']));
                }else{
                    $http.get(url).then(function(res) {
                        if (res.status === 200) {
                            window.localStorage['restaurants'] = JSON.stringify(res.data.results);
                            callback(res.data.results);
                        }
                    });
                }

                //return [{"id":114637,"name":"Kidscafé Breda","category":"Lunchroom","telephone":"+31 76 887 5833","mobile":null,"website_url":"http://www.kidscafebreda.nl","facebook_url":"https://www.facebook.com/kidscafebreda","twitter":null,"tagline":"Lekker ongedwongen lunchen met je (klein) kinderen!","rating":99,"url":"https://www.eet.nu/breda/kidscafe-breda","created_at":"2015-01-14T09:11:46Z","updated_at":"2015-03-13T08:36:57Z","address":{"street":"Louwersdonk 54","zipcode":"4824 DE","city":"Breda","region":"Noord-Brabant","country":"The Netherlands"},"plan":"premium","images":{"original":["https://d1ds1nqrpp2srf.cloudfront.net/attachments/75838/10455577_266172093570131_1790639803785758915_n-jpg20150114-39460-78vmaf_original.jpg?1421227276","https://d1ds1nqrpp2srf.cloudfront.net/attachments/77193/kidscafe_original.jpg20150228-29732-1c7ap3p?1425106668","https://d1ds1nqrpp2srf.cloudfront.net/attachments/77194/10492078_266172163570124_2923082149584031424_n_original.jpg20150228-29600-1jv0ir0?1425106703","https://d1ds1nqrpp2srf.cloudfront.net/attachments/77195/bar_original.jpg20150228-29680-1bjhec0?1425106738","https://d1ds1nqrpp2srf.cloudfront.net/attachments/77196/jake_original.jpg20150228-16010-fplj8p?1425106802","https://d1ds1nqrpp2srf.cloudfront.net/attachments/77197/speelhuis_original.jpg20150228-16010-vkmnlf?1425106865"],"cropped":["https://d1ds1nqrpp2srf.cloudfront.net/attachments/75838/10455577_266172093570131_1790639803785758915_n-jpg20150114-39460-78vmaf_featured.jpg?1421227276","https://d1ds1nqrpp2srf.cloudfront.net/attachments/77193/kidscafe_featured.jpg?1425106668","https://d1ds1nqrpp2srf.cloudfront.net/attachments/77194/10492078_266172163570124_2923082149584031424_n_featured.jpg?1425106703","https://d1ds1nqrpp2srf.cloudfront.net/attachments/77195/bar_featured.jpg?1425106738","https://d1ds1nqrpp2srf.cloudfront.net/attachments/77196/jake_featured.jpg?1425106802","https://d1ds1nqrpp2srf.cloudfront.net/attachments/77197/speelhuis_featured.jpg?1425106865"]},"currency_symbol":"€","resources":{"self":"https://api.eet.nu/venues/114637","reviews":"https://api.eet.nu/venues/114637/reviews","country":"https://api.eet.nu/locations/1974","region":"https://api.eet.nu/locations/7","city":"https://api.eet.nu/locations/455","new_reservation":"https://reserveringen.eet.nu/api/restaurants/35019/reservations/new","reservation_restaurant":"https://reserveringen.eet.nu/api/restaurants/35019","reservations":"https://reserveringen.eet.nu/api/restaurants/35019/reservations"},"geolocation":{"latitude":51.609245,"longitude":4.7439425},"counters":{"images":6,"menus":2,"reviews":6,"fans":0}}];
            },
            getRestaurantByIndex: function(index) {
                index = index || 0;
                return window.localStorage['restaurants'][index] || {};
            },
            getLocations: function(callback){
                callback = callback || function(){};
                if(window.localStorage['locations']){
                    callback(JSON.parse(window.localStorage['locations']));
                }else{
                    $http.get('https://api.eet.nu/locations?type=City').then(function(res){
                        if(res.status === 200){
                            var json = res.data.results
                            window.localStorage['locations'] = JSON.stringify(json);
                            callback(json);
                        }
                    });
                }
            }
        }
    }
]);