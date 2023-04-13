import { PlayerContext } from '../contexts/ContextApi'
import { useState, useEffect } from 'react'

import { FaPlay, FaPause } from "react-icons/fa"
import { BiShuffle } from "react-icons/bi"
import { BsFillSkipStartFill, BsFillSkipEndFill } from "react-icons/bs"
import { FiRepeat } from "react-icons/fi"

export const Playback = () => {
  const { TrackData, isPlaying, setIsPlaying, MusicDuration, MusicCurrentTime, BufferDuration } = PlayerContext()
  const [ExpandPlayer, setExpandPlayer] = useState(false)
  const [SeekPos, setSeekPos] = useState('0')
  // const [isPlaying, setIsPlaying] = useState(false)

  function fancyTimeFormat(duration) {
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600)
    var mins = ~~((duration % 3600) / 60)
    var secs = ~~duration % 60

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = ""

    if (hrs > 0) {ret += "" + hrs + ":" + (mins < 10 ? "0" : "")}

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  }

  useEffect(() => {
    setSeekPos(((MusicCurrentTime/MusicDuration)*100))
    console.log(SeekPos)
  }, [fancyTimeFormat(MusicCurrentTime)])

  // useEffect(() => {
  //   let timerOut = setTimeout(() => { ExpandPlayer ? setExpandPlayer(false) : console.log('SearchQuery') }, 4000)
  //   return () => clearTimeout(timerOut)
  // }, [ExpandPlayer])

  return (
    <div className='px-2 pt-2'>
      <div className={`relative flex flex-row h-14 w-full p-2 bg-white/10 align-middle items-center overflow-hidden rounded-xl backdrop-blur-lg transition-all`}  style={{height: ExpandPlayer ? '18rem' : '3.5rem'}}>
        <div className='flex-none aspect-square h-full shadow-[0_4px_24px_rgb(0,0,0,50%)] overflow-hidden rounded-lg' style={{height: ExpandPlayer ? '170px' : '100%'}}>
          <img src={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISFRgSEhIYGBESEhESERERERERERISGBgZGhgYGBgcIS4lHB4rHxgYJzgmKy8xNTU1GiU7QDs0Py40NTEBDAwMEA8QHxISHjQrJCU0MTE2NDQ0MTE0NDQ0NDQ3NDQxNDQ0NjQ0NDQ0NDQxMTE0NDQ0NDQ0NDQ0ND0xNDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIEBQMGB//EADkQAAIBAgMFBwIFAwMFAAAAAAABAgMRBCExBRJBUXEiMmGBkaGxBsETQnLR8BRSYiOC4RYzksLx/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAEDAgQFBv/EACwRAAIBAwIFAwMFAQAAAAAAAAABAgMRMQQhBRITQXEiMmFRgbEjNJGhwRT/2gAMAwEAAhEDEQA/APldhpDsMi507CsOwACQAAAsAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAYAmwhjGogEQaJgAQAm0FgCAWJ2CwBCwEpNLN6FeWKXBe4MZTjHLO1gscI4m/h7sJYi3jlwyFivrxO9gsc6da+ifDlr1Gq0enVfcWMo1YvuTsBJBugsIhYluhugEQJNCAIgTsFgCAyaQWAIWCxOwrAEbATsIEisSSBIdgBWGkMAAAYmAAAAArBYdwAK+LV428dOZQjbj1RpVqe8vHgzV+nvpj8ZKpWbUL9mKyclzb5EOSirs1KtKUp7I87GcU7qPk87acPUagpZtWztxz1d/sfWMNsPDxilGnFL9KOG0tjUZ3cotycd1KK0WRV119Cf+V2yfL2oxi1+bnfLoRndKMXpbes9Lt2y8rG1idgV3Jv8PdjfK2aikuPkUa+zasMpReastHdcOhcppmu4SXY5wm2kopLK/dysr6+J1p1FLqtUV5Ozzdlk7NacPIdaW67rVZJ2yemXoycmdOq4vfBaCxGlO6T5nQixuppq5GwWJCsCRWCxIASRsFiQAEbASAAVhgAADIpErACSGMASFgaAYBFITRMQBFIdhik0lduyQIO+EoxlK83u04dqpJ6Rj+70SNdfVyjvKhRj+HSgpN1G96S34wyS7veXPQ8ti8TvRUIvspub4b0rJK/RX9WcMPX3N5NXjOKjNcXHejJ2fB9lZkOCe7NSpXle0T22F+v6d1+Jh5JLjCcZezS+T0OD+sNnVbJ1HTk9FVg0vNq8V6ny2X9M72VSLu7K8KqtaNs+y9d728SeF2XOvJQwylUk73Sg47vJt3sl4t8DHpxRgq9R7ZPrssTTqRbpzhOPOEozi/QycZShJZx5rM8v/wBHVqLi3iFGo1f/AE1N28FK6ub+C2ViqbUK1ZVFNRUFJSillduU0rvgrcW9cs6pKK3TNmDk9pRPNbZwEWm4qzWdjzn4jyXJ5fzzPov1LsudBXnBRfZ3lCbqQakm4ThJpOz3ZJp5prxR4DHUd2V+bZbTl2NatCzuieD/ADcsmlwRZscsHTtG/PP9ixYzNmkrRVyFhg0FgXDEkNIdgQRsFiQAEbAMABAOwADSGAgSMLDQWAEOw7BYAjYY7BYxBGx1w2yK2KlGFO1nNxblK260t5ya1tbjzdiFiNLHVMPVjVp62cWrXur3t/OQd7bFdXG+DV+q/pT+jp06lNynFJwryayVR5xkl+VPu/7VxZg7H2ZLFVI0o5XzlK192K1Z7HYm2a1WU6dSvalUi1OjXpRqrO94pq1suadj0Gw8DRo70KUUlq5LtN9ZFUqjirPJXGjGT5lj6FvYH01g6EUvwYynxnNKcm+d3p5HpNyMckklySSRQhLdOtTFRUc3mtTBb5LGksGVtiinUhblf3/5I4mpUm4U6c3GW7LemoQnGCTSUZxee7J8Vbu6lbae0oOcWnkrX+V/PEtUsRh4RlXqVIwSf4VVyurpJzik+Lzuks+0yJRu9jOMrLcy/qbFT/p4RrJKcZKEkneLd5Ws/wBMG0fNdpdp2jnZ2R6baW1v62UnCDjQpSm4OTvKcpWSlLx3V7s82qXbcuC+X/GW01bJRV9UklhnSEbJLkrEh2CxcXWsRaESYEXJsIRITJFgEAwSIBgAIBgCBpBYYAkAHYLACACVgCI7DsAArCRILAGhsLBTqpxUo01HsubjvznLmldWWmdz0WxsDVwlRylVU4TVsouDT6XZ5PBVPw5qbk1Fd6130yPRr6gpqOWdlq39imSleyKVyxzlGltHbDUnFZbreTaVorK/iZOL2xJq29k7+ls348fUxMfthVG5qy3m3up8bWfqZc686jtG7enTq/5oSo2K3Vu9j0dLFucrvmn4t6GlPCwxO9QnGdpOnV/EU/8ATtDfTju2yleaz5NmPsfZ7bUpvPgk8ln7nuMJTSh5FcnZ7F0I8y9Rg47CQpU9yEUkkeQce0+p7TbfI8piaLi78GZUmZTXqRXsImIvMiIWJJCsAKwmhgAIRIABWESsRAAAsABNIYxWABDBIdjEkjYZIQIFYLDGZCxCxILDSBJQx6aalna1rrg/EpOrJ6P+fsbjRGMEtEl0SFzWnp+aV0zFpQ3pZs9Bg8JursrxbKlbDp9pLtLNWyv4M2cBiFJJLiuPDqVzbMY0uV2L+zotNJnqcIuz4nm1Vp01vzmoxWspPV8kuPRFaX1HWrSVDBws5NJ1Zxu4pyUd5rNQim1eUr28CpRbwbHOoo3cbhHOVl5tu0UuLb4JatmPtvZipwinNOrL8OX4eijCSfblzSlCay17LV08tDBYinhbOVR1az3Jubm1J14TmnFZ2nQlGSW7ZX1yemTUrb7d+Prkks/JJeCSSskkQ2oLbdm1p9JUrz5pKy/tmfPBpLLN8ylONnZmva3HoV69JyySbfCyuyKdV33OhqdJHkvFWaM4CTX84isbJyLCsKxIDIggBIiAAWHYQAWAAAJjBIdjEkEhgAAAFhgCAYgAABgCAZCpNRTk9ErghuwyjiMZKlLsPVXavdKXTgVa+LlPjZcll7kP6eSSck1vZxTTzjwa8NfQm1zUq1rq0f5LeHVTETSlJt2bfFpcbL09S5Kq4JwjFxXG/el+p8TS+nNmTjTeJatCU3ShfvSaW9JrnG6tdcYyXA0a+GhPvRXUoqytK3Y63DtF1KHUT3bZ4ys28zT2b/VSSyvHg6mnk9TcobNg7Scbpd2L0/Uy+6d37ehi57WsbVLh8lPmcmvBlqlUtnu38JO3uiVGTg97JPSyd1bxyX8RenD3+OLK84FLOmqdu7Fi8NCtHfgrTWvJ8r/uYUoNNpqzWTT4G9hp7svDR+ZPaez1UW9DvpZcN5cmXU6nZnP1ekuuaK3POWCxKUeD1WTT1EbByBWE0SEwBESYjIgiAAAdUMQzEkBiAAYAMAQDAAVgGAAivio3jbmywWcNhk+1LKKTlJvRRWrIk7Isp0uo/juZcMAlHfllFtRjot6T6tKy1bbSL+I2VOriZUYWUacIb8+7CnTjGO9JtxVs76xjnwWipYvGuc1OPZjBr8ON2t1J3Tyad7q+TL+O+oalSm6cYKCmlGpJSlKU4JJRi28lFJWslnZaWSM4JpbnO1M4SnywWy/s1YbQVapJU1bD0Iqjho3vanvS3ZOyV20o562SuW1Hee7w1lflyKGycK6NNuXelaTjxV+7Hrp5s0YQaVvzPOXXl/ORqVXeTZ6rh1N09OovOX9ztfK/kicYcvFGdPadCEtyVRXWWSk1fjmlbUv0ZXSaet2ms8mYOLRsxqwk2otO3yKa1fKyXl/yVKkfXiW3K0fFsrYqVoW4u33MWWp2RT105q3i2aal2Yy4LXoylGFknwj7yeiLOHzjuvlZ9Vb7iJFjM2hhd+8l34tpr+5cPO1jIPRTlZrx7L68DM2lh1FqS0fe/UbNOXZnJ1umSXUj9ygyLJCZacsQhsABAAAg6AAwSIYAAAAMABDAAAATAJQjdpc/gltrEbqVGOuUqnzGPlq+qOmCajvVJd2nBy6u/ZXm8jEqVHJuUneUm5SfNvNhK8vBFet06PLHMvwRNf6ewP4k9+S7FO0v1T/Kvv8A/THWZ7OlCOFw+83nBSlP/Ko1p62XkiarsrLuU8OoKdTqSxHdmdtja8oVFGCV4ycpbyunwS/ngXsbtRRofixylJbsFxU3dP8A8bN+R5GhJyk5S1bbb8TrUqym4wb7EHKUV4y1fsjHoqyLnxSopTthrb4Ib1pdIxXqz2GwKjdKz/K3GPTJ/wDseLnLtS6x+T2mw42oRb1k5P1eXskK1uUy4PzOu38MuQztyu1xOGKV5KPn9vsdKU7RXNpW83f7g1utzfSKNNnqsnOffjBaR7UvFonQb9d62fRnDDPvTb7zsump1w0k7JNZJ7yWqeSCIOeJj2rf3R3l1KGPzppvXfXlqaWJ70H42fQysXUTjJcPxLx8Yu/7P1LI+5Grqnam18MzwaAZsnnyDAGAAAAAHQAAALDEMEgABYAAAECAYmDJUYb0kub9uIuSouTSXcW0pfh0Yx/NUm5S/THJL1fsY7ZpbeqXqqPCFOEfNrefyZsnkZQxc0tbK9VxWFsX9i0d+rG+kO2/LT3aLn1JinaNG+rc5dL2S9fhD+nIWU5vwivLN/KKO2oS31N6Sioxf6cpe7fqYN3n4N5RlS0F45k9/BTpnWOrZxgd4Fxxysldy5nucDHdox/Qvg8vsXAOrKU33I6/5SWaj+//ACem392mvGMYrxb4GrWlfY9FwahKKdSWHgbqWaybUbXS4X06HapFyTvkuSzd+Gb/AGIxStlxd3x1Z3ebS8Smx3UcVS3Y2u2+b5+RJ04vPislz9R1JZjjx/nIJEsrYqElF2k3ZN2efo9UZm0IpKKXCKvzvne64am3OOXgZe1YXSaWl7vTK69czKOUamqj+m/BkjEM2TgEZCGIAAAADoAAgAsMAAAAAEjEMTFgIvbPp/m55Ios1cJC0Y9L/cwm9jb0UFKpd9jze1Zf61Trb0SKl+B32hK9Wb/zZwRdHCOHXd6svL/J6XYkUqWeSe/J/H2Ou2cNvYdTS7UGp2XKXe+b+RXptxpRjxmoRXR5t/bzNmrBSptPRxs+lszVcrTuenp0lPT9P4X8niqejO9CnKfZiryeiXy+SIww09900rzvupffpxuepwOCjRiks5tduXFvw5LwL51EkcLR6Cdeo09ksv8AwlgMKqVLdWbSk5PnJ6sdddiDf5Wn7O3uzu32ZdH8HHERvBLxh6XRq3uz1ipxhBRitkjth1ovDM78eiOOFbR0nJ2fiwZoSYQ425sisuARlr1CEsoFoUdoTtF+Kt62LyasZe1ZdmK8X8GUVua2qlam38GYACZsHnxCBgAAAAB0GJDBIAAAAOwIAAEMQArXy55G3FW8kY9FdqP6o/JsSdk2+RVUeDp6BemUjx2Kl25v/OXyznCLbstXZLqxVHdt8237nfARvOC/zj8o2MI83bmq2+r/ANNqD3pq3dprdj4vi/U3ody3gZVPD7kVzbuzToPs+Rpt3PYaeDgmnk44aEc5JLeaSk+LtlbpkizYqYWWbXi/kuNkPcvppJbEJd2XRkKj7MfL4JS7kujOc+7HrFELJk8Fii8icX7Z+pyw2j6/ZHWC/dkhYFPM5Req8WdmyvB5sEPKJ2MfaVS8t3+1/ZGqmYuP778bP2RZD3GlrpWpFcQxMuOIIQ7iAAAAA6AJDAGAAgSNAAAAxMbEwDphVea8/ZM0cXPdhJ8ov4KOA766M77YqWoy8Vb1diqW8kjp6eXLppS8/g8lYvbJg5VI/wCN5PyWXu0Urm19P083Li5KPlFXfu0XVHaLOBoqfU1EV83N7HZJLodMO8jjtDgTw7yNRHsX7jlhl2/UuzfAqYbveT+SzMExwEl2H0Zym+xHy+DpJ9h9GVa/cjb+5L2YWRJ2RboLL3Z2i9WcKT7Kt4nVadcgZRwOcsvI4x49TpV06s5Q1fkDF5CTzMTGPty6r4RszlqYuJfbfX7FtPJz+IP0LycRMZFlpyAuACAAAAEHRDAAZDBAAAwAAAEwAA77O766Mlt7/tv9S+RAVS96OhH9nL7/AIPMI9J9P92P+75ACyt7TlcJ/co1Mfw6sVAANZHqn7hYXV9H8lmYACY4FPuPoyu+7H9cPkAIWSJ4O2H7kSxwXkAEmUcEK+nmRWr8gAEPJynxMbEd+XUALaeTm8Q9q8nFiAC05QCAAAAABB//2Q=='} className='h-full w-full'/>
        </div>
        <div onTouchMove={(e) => {setExpandPlayer(true)}} className={`flex flex-1 flex-col ml-2 align-middle`} style={{textAlign: ExpandPlayer ? 'center' : 'left'}}>
          <h1 className='text-sm font-semibold text-white'>{'TrackData.TrackName'}</h1>
          <h2 className='text-xs text-white'>{'TrackData.ArtistName'}</h2>
        </div>
        <div className='flex flex-none flex-col order-last h-full justify-center items-center aspect-square' onClick={() => setIsPlaying(!isPlaying)}>
          { isPlaying ? <FaPause/> : <FaPlay/> }
        </div>
        {/* <div className='absolute h-[3px] bottom-0 left-0 mx-1 z-10 rounded-full bg-white/20 w-[0%] transition-all delay-0 duration-300 ease-in-out' style={{ width: `${((BufferDuration/MusicDuration)*100)}%` }}></div> */}
        {/* <div className='absolute h-[3px] bottom-0 left-0 mx-1 z-20 rounded-full bg-green-500 w-[0%] transition-all delay-0 duration-300 ease-in-out' style={{ width: `${SeekPos}%` }}></div> */}
        <div className='absolute h-[3px] bottom-0 left-0 mx-1 z-10 rounded-full bg-white/20 w-[0%] transition-all delay-0 duration-300 ease-in-out' style={{ width: `${(0.5*100)}%` }}></div>
        <div className='absolute h-[3px] bottom-0 left-0 mx-1 z-20 rounded-full bg-green-500 w-[0%] transition-all delay-0 duration-300 ease-in-out' style={{ width: `${50}%` }}></div>
      </div>
    </div>
  )
}