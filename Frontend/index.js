const submitData = async () => {
    let firstNameDom = document.querySelector("input[name='firstname']");
    let lastNameDom = document.querySelector("input[name='lastname']");
    let ageDom = document.querySelector("input[name='age']");
    let genderDom = document.querySelector("input[name='gender']:checked");
    let interestDom = document.querySelectorAll("input[name='interests']:checked");
    let descriptionDom = document.querySelector("textarea[name='description']");
    let messageDom = document.getElementById('message');

    try {

        let interest = '';
        for (let i = 0; i < interestDom.length; i++) {
            interest += interestDom[i].value;
            if (i !== interestDom.length - 1) {
                interest += ', ';
            }
        }

        let userData = {
            firstName: firstNameDom.value,
            lastName: lastNameDom.value,
            age: ageDom.value,
            gender: genderDom ? genderDom.value : '',
            interests: interest,
            description: descriptionDom.value
        };

        console.log('submitData:', userData);

        const response = await axios.post(
            'http://localhost:8001/users',
            userData
        );

        console.log('response:', response.data);

        messageDom.textContent = 'ส่งข้อมูลสำเร็จ';
        messageDom.className = 'message success';

    } catch (error) {
        console.error('Error:', error);

        messageDom.textContent = 'เกิดข้อผิดพลาดในการส่งข้อมูล';
        messageDom.className = 'message danger';
    }
};