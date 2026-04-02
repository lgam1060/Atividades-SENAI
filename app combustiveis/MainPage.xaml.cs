namespace App_combustiveis
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }

        private async void OnCalcularClicked(object sender, EventArgs e)
        {
            try
            {
                double etanol = Convert.ToDouble(txtEtanol.Text);
                double gasolina = Convert.ToDouble(txtGasolina.Text);

                double resultado = etanol / gasolina;

                if (resultado <= 0.7)
                {
                    lblResultado.Text = "Compensa usar Etanol";
                }
                else
                {
                    lblResultado.Text = "Compensa usar Gasolina";
                }
            }
            catch
            {
                lblResultado.Text = "Erro!";

                await DisplayAlertAsync(
                    "Erro",
                    "Digite valores válidos!",
                    "OK"
                );
            }
        }
    }
}