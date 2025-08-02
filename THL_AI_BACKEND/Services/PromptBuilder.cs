namespace GptApi.Services
{
    public static class PromptBuilder
    {
        public static string BuildCommandInterpretationPrompt(string userText)
        {
            return
$@"کاربر گفت: '{userText}'
لطفاً فقط یک خروجی JSON بده که شامل action و target باشه.
مثلاً:
{{
  ""action"": ""navigate"",
  ""target"": ""voucher""
}}
هیچ متن توضیحی نده. فقط JSON خام بده.";
        }

        public static string BuildArticleCreationPrompt(string userText)
        {
            return
$@"کاربر گفت: '{userText}'
لطفاً فقط خروجی JSON بده به فرمت زیر:
{{
  ""action"": ""create"",
  ""target"": ""article"",
  ""data"": {{
    ""description"": ""..."",
    ""amount"": ...
  }}
}}
هیچ توضیح یا متن اضافه نده. فقط JSON بده.";
        }

        public static string BuildProductDescriptionPrompt(string userText)
        {
            return
$@"بر اساس توضیح زیر، یک توضیح کامل و جذاب برای محصول بنویس:
'{userText}'

فقط خود توضیح محصول را بده. هیچ برچسب یا متن اضافی نده.";
        }
    }
}
