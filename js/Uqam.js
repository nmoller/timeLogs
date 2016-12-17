
/**
* Helper package pour obtenir les composants.
*
*/
Uqam = {
    dateParser: function(dateString) {
        return dateString.split(' ');
    },

    convertMonthToJSInt: function(month) {
        var months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        return months.indexOf(month);
    },

    splitHourMinutesSecs: function(hourString) {
        var temp = hourString.split(':');

        return {
            hour: parseInt(temp[0]),
            minute: parseInt(temp[1]),
            second: parseInt(temp[2])
        }

    }
};
// Tests de la clase Uqam
//var dateArray = Uqam.dateParser('Tue Dec 13 22:08:09 EST 2016');
//console.log(Uqam.convertMonthToJSInt(dateArray[1]));
//console.log(Uqam.splitHourMinutesSecs(dateArray[3]));
