import type {Dispatch, SetStateAction} from 'react';

const tipOptions = [
  {
    id: 'tip-05',
    value: .05,
    label: '05%'
  },
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-15',
    value: .15,
    label: '15%'
  },
]
type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>
}

export default function TipPercentageForm({ setTip }: TipPercentageFormProps) {
  return (
    <div>
        <h3 className="text-2xl font-black">Seleccione el porcentaje de propina</h3>

        <form>
            {tipOptions.map(tip => (
                 <div key={tip.id}className="flex gap-2">
                    <label htmlFor={tip.id}>{tip.label}</label>
                    <input
                        id={tip.id}
                        type="radio"
                        name="tip"
                        value={tip.value}
                        onChange={e => setTip(Number(+e.target.value))}
                    />
            </div>
            ))}
           
        </form>

    </div>
  )
}
