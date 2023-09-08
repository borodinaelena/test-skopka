import { times, round } from 'lodash'

function Range({ id, rate }) {
  const roundRate = round(rate);
  const MAX_RATE_VALUE = 5;
  return <>
    <div className="rating rating-xs">
      {times(MAX_RATE_VALUE, Number).map((index) =>
        <input key={index} type="radio" name={`rating-${id}`} className="mask mask-star-2 bg-orange-400" defaultChecked={roundRate === index + 1} />
      )}
    </div></>
}

export default Range