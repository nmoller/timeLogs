
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

    },

    prepareD3Data: function(d){
        d.time = this.dateParser(d.time);
        hour = this.splitHourMinutesSecs(d.time[3])
        d.time = new Date(d.time[5],
                this.convertMonthToJSInt(d.time[1]),
                d.time[2],
                hour.hour, hour.minute, hour.second);
        d.total = parseFloat(d.total.slice(2,7));
    },
    
    addGraphAxes: function (svg, data) {
        // Add the valueline path.
        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", valueline);
        // Add the X Axis
        svg.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
        // Add the Y Axis
        svg.append("g")
            .attr("class", "axis axis--y")
            .call(yAxis);
        //
    }

};
// Tests de la clase Uqam
//var dateArray = Uqam.dateParser('Tue Dec 13 22:08:09 EST 2016');
//console.log(Uqam.convertMonthToJSInt(dateArray[1]));
//console.log(Uqam.splitHourMinutesSecs(dateArray[3]));
