export function kold(n) {

    for (let i = 1; i <= n; i++) {


        if (i % 15 === 0) {
            // console.log('fizzbuzz')
            return 'fizzbuzz'
        } else if (i % 3 === 0) {
            // console.log('fizz')
            return 'fizz';
        } else if (i % 2 === 0) {
            // console.log('buzz')
            return 'buzz'
        } else {
            //  console.log(i)
            return i
        }

    }

}

kold(37);