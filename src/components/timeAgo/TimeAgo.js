import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timeStamp }) => {
    let timeAgo = "";
    if (timeStamp) {
        const date = parseISO(timeStamp)
        const timePediod = formatDistanceToNow(date)
        timeAgo = `${timePediod} ago`
    }
    return (
        <span title={timeStamp}>
          time:  &nbsp; <i>{timeAgo}</i>
        </span>
    )
}

export default TimeAgo;