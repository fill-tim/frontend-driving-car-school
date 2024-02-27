import "../styles/shedulePage.css"

const fakeData = [
    [{
        name: 'name1',
        date: '13.23.2002',
        name_teacher: 'teacher'
    }, {
        name: 'name1',
        date: '13.23.2002',
        name_teacher: 'teacher'
    },{
        name: 'name1',
        date: '13.23.2002',
        name_teacher: 'teacher'
    },{
        name: 'name1',
        date: '13.23.2002',
        name_teacher: 'teacher'
    },{
        name: 'name1',
        date: '13.23.2002',
        name_teacher: 'teacher'
    }
    ],
    [{
        name: 'name1',
        date: '13.23.2002',
        name_teacher: 'teacher'
    }],
    [{
        name: 'name1',
        date: '13.23.2002',
        name_teacher: 'teacher'
    }],
    [{
        name: 'name1',
        date: '13.23.2002',
        name_teacher: 'teacher'
    }],
    [{
        name: 'name1',
        date: '13.23.2002',
        name_teacher: 'teacher'
    }],
    [{
        name: 'name1',
        date: '13.23.2002',
        name_teacher: 'teacher'
    }],
    [{
        name: 'name1',
        date: '13.23.2002',
        name_teacher: 'teacher'
    }]

]

interface IFakeData {
    data: []
}

interface ILesson {
    data: {
        name: string,
        date: string,
        name_teacher: string
    }
}

function Lesson({ data }: ILesson) {
    return (
        <div className="lesson-items">
            <div>{data.name}</div>
            <div>{data.date}</div>
            <div>{data.name_teacher}</div>
            <button>Записаться</button>
        </div>
    )
}

function Schedule({ data }: IFakeData) {
    return (
        <div >
            <div className="test">18.12.2024</div>
            <div className="schedule-item">

                {data.map((item: any) => (
                    <Lesson data={item} />
                ))}
            </div>
        </div>
    )
}

export function SchedulePage() {
    return (
        <div className="con">
            <div className="container-schedule-page">
                {fakeData.map((item: any) => (

                    <Schedule data={item} />
                ))}
            </div>
        </div>
    )
}