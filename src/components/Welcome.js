const Welcome = ({ setShowScreen }) => {
    
    const date = new Date();
    let [ hour, minute, day, month, year ] = [ date.getHours(), date.getMinutes(), date.getDate(), date.getMonth() + 1, date.getFullYear() ];
    if (month === 1) {
        month = 'January';
    } else if (month === 2) {
        month = 'February';
    } else if (month === 3) {
        month = 'March';
    } else if (month === 4) {
        month = 'April';
    } else if (month === 5) {
        month = 'May';
    } else if (month === 6) {
        month = 'June';
    } else if (month === 7) {
        month = 'July';
    } else if (month === 8) {
        month = 'August';
    } else if (month === 9) {
        month = 'September';
    } else if (month === 10) {
        month = 'October';
    } else if (month === 11) {
        month = 'November';
    } else if (month === 12) {
        month = 'December';
    }
    if (day < 10) {
        day = 0 + day.toString();
    }
    if (minute < 10) {
        minute = 0 + minute.toString();
    }
    if (hour < 10) {
        hour = 0 + hour.toString();
    }

    setTimeout(() => {
        document.getElementById("text-welcome").style.opacity = '1';
    }, 2500)

    setTimeout(() => {
        document.getElementById("text-welcome").style.animation = 'zoomOutDown 1s';
    }, 5000)

    setTimeout(() => {
        document.getElementById("text-welcome").style.display = 'none';
        document.getElementById("text").style.display = 'none';
    }, 5800)

    setTimeout(() => {
        document.getElementById("welcome").style.opacity = '1';
    }, 7500)

    const handleButton = () => {
        document.getElementById("welcome").style.opacity = '0';
        document.getElementById("button-enter").style.animation = 'zoomOutDown 1s';
        setTimeout(() => {
            setShowScreen(true);    
        }, 2000) 
    }

    return (
        <>
        <div className="welcome-box" id="welcome">
            <p className="hour">{`${hour}:${minute}`}</p>
            <p>{`${day} ${month} ${year}`}</p>
            <h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                Jhonny Bracho
            </h1>
            <button onClick={handleButton} id="button-enter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                </svg>
                Enter
            </button>
        </div>
        <div className="text" id="text">
            <h2 id="text-welcome">Welcome</h2>
        </div>
        </>
    );
}

export default Welcome;