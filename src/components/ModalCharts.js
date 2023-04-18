import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import js from '../resources/js.png';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ModalCharts = ({ setShowModalCharts }) => {

    const handleClose = () => {
        document.getElementById("modal").style.animation = 'zoomOutDown 1s';
        setTimeout(() => {
            setShowModalCharts(false);
        }, 800);
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
                title: {
                display: true,
                text: 'Jhonny Bracho'
            },
        }
    };

    const skills = ['Html', 'Css', 'Sass', 'Bootstrap', 'JavaScript', 
    'TypeScript', 'React.js', 'React Native', 'Next.js', 'Node.js', 
    'Express.js', 'Postgresql', 'Python', 'Figma', 'Photoshop'];

    const data = {
        labels: skills,
        datasets: [
            {
                label: 'Skills',
                data: [90, 90, 80, 60, 80, 40, 90, 50, 50, 80, 80, 70, 50, 30, 50, 100],
                backgroundColor: 'rgba(112, 12, 116, 0.726)',
            },
        ],
        
    };
  
    return (
        <div className="modalCharts-container" id="modal">
            <div className="modalCharts-box">
                <div className='modal-title'>
                    <p>Chart</p>
                    <button onClick={handleClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </button>
                </div>
                <Bar options={options} data={data} id='chart'/>
            </div>
        </div>
    );
}
  
export default ModalCharts;