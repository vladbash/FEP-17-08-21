(() => {
    function updateStudentWithCustom(student) {
        // return {
        //     ...student,
        //     avg: Math.round(avgOfNumbersArray(student.marks))
        // };
        // ^^
        student['avg'] = Math.round(avgOfNumbersArray(student.marks));
        student['median'] = medianOfNumbersArray(student.marks);
        return student;
    }

    function getUnsuccessfulStudents(students) {
        return students.filter(e => e.avg < 50);
    }

    let list = studentsMock.getStudentList(10);
    list = list.map(updateStudentWithCustom);

    console.log(list);

    console.log(getUnsuccessfulStudents(list));
    list.push(
        updateStudentWithCustom(
            studentsMock.getStudent()
        )
    );

    console.log(list);
    console.log(list.map(e => `${e.name} | ${e.avg}`).join('\n'));
})();