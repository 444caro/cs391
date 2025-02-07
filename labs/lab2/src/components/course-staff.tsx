type CourseStaffProps = {
    name: string;
    role: string;
    rating: number;
};

export default function CourseStaff({name, role, rating}: CourseStaffProps){

    return (
        <div>
            <p> Course Staff </p>
            <p>Name: {name}</p>
            <p> Role: {role}</p>
            <p> Rating: {rating} </p>

        </div>

    );
}