const LANGUAGES = [ // 追加
  'JavaScript',
  'C++',
  'Ruby',
  'Java',
  'PHP',
  'Go'
];

export const List = () => {
    return(
        <div>
            {
                LANGUAGES.map((lang, index) => {
                    return <div key={index}>{ lang }</div>
                })
            }
        </div>
    )
}