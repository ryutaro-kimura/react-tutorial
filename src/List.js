const LANGUAGES = [ // 追加
  'JavaScript',
  'C++',
  'Ruby',
  'Java',
  'PHP',
  'Go'
];

export const List = ({ title }) => {
    return(
        <div>
            <h4>{ title }</h4>
            {
                LANGUAGES.map((lang, index) => {
                    return <div key={index}>{ lang }</div>
                })
            }
            <div>リストです</div>
        </div>
    )
}