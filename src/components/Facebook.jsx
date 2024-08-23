import data from '../data/berlin.json'

function Facebook () {

    return(
        <div>
            {data.map((profile, index) => (
                <div key={index}>
                <img src={profile.img} alt={profile.firstName}/>
                <h3>First Name: {profile.firstName}</h3>
                <h3>Last Name: {profile.lastName}</h3>
                <h3>Country: {profile.country}</h3>
                <h3>Status: {profile.isStudent ? 'Student' : 'Teacher'}</h3>
                </div>
            ))}
        </div>
    )
}

export default Facebook