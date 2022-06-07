import './SocialMediaStatics.css'
import { FaFacebookF } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { GrTwitter } from 'react-icons/gr';
import Circle from '../Circle';

const colors = ['#4267B2', '#1DA1F2', '#FF0000']

const data = [
    { percentage: 60, social: 'Facebook Followers',  increasingPercentage: 22.14, Icon: FaFacebookF },
    { percentage: 65, social: 'Twitter Followers',   increasingPercentage: 15.33, Icon: GrTwitter },
    { percentage: 75, social: 'Youtube Subscribers', increasingPercentage: 38.86, Icon: AiFillYoutube }
].map((item, i) => ({ ...item, id: i + 1 }));

const SocialMediaStatics = () => {
    return (
        <>
            {data.map((item, index) => (
                <div key={item.id} className={`card social-static-item social-static-item-${item.id} md-full`}>
                    <div className='social-static-item-left'>
                        <Circle value={item.percentage} color={colors[index % colors.length]} />
                        <div>
                            <h3 className='social-static-item-title'>{item.social}</h3>
                            <span className='social-static-item-increasing'>+{item.increasingPercentage}% Since Last Month</span>
                        </div>
                    </div>
                    <item.Icon className='social-static-item-icon' color={colors[index % colors.length]} />
                </div>
            ))}
        </>
    )
}

export default SocialMediaStatics