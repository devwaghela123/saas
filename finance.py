import yfinance as yf
import pandas as pd
import talib

# Fetch historical data
stock = yf.download("AAPL", start="2023-01-01", end="2024-01-01")

# Calculate technical indicators
stock['RSI'] = talib.RSI(stock['Close'], timeperiod=14)
stock['MACD'], stock['MACD_Signal'], _ = talib.MACD(stock['Close'], fastperiod=12, slowperiod=26, signalperiod=9)
stock['Upper_BB'], stock['Middle_BB'], stock['Lower_BB'] = talib.BBANDS(stock['Close'], timeperiod=20, nbdevup=2, nbdevdn=2)
stock['Volume_SMA'] = stock['Volume'].rolling(window=20).mean()
stock['50_EMA'] = talib.EMA(stock['Close'], timeperiod=50)

# Criteria
stock['RSI_Score'] = (30 - stock['RSI']) / 30
stock['MACD_Score'] = (stock['MACD'] > stock['MACD_Signal']).astype(int)
stock['BB_Score'] = (stock['Close'] <= stock['Lower_BB']).astype(int)
stock['Volume_Score'] = stock['Volume'] / stock['Volume_SMA']
stock['Support_Score'] = ... # Custom function to check proximity to historical support
stock['EMA_Score'] = (stock['Close'] <= stock['50_EMA'] * 1.05).astype(int)

# Calculate Probability of Success
weights = {
    'RSI_Score': 0.20,
    'MACD_Score': 0.20,
    'BB_Score': 0.20,
    'Volume_Score': 0.10,
    'Support_Score': 0.20,
    'EMA_Score': 0.10
}

stock['Probability_of_Success'] = (
    weights['RSI_Score'] * stock['RSI_Score'] +
    weights['MACD_Score'] * stock['MACD_Score'] +
    weights['BB_Score'] * stock['BB_Score'] +
    weights['Volume_Score'] * stock['Volume_Score'] +
    weights['Support_Score'] * stock['Support_Score'] +
    weights['EMA_Score'] * stock['EMA_Score']
)

# Filter stocks based on probability threshold
successful_trades = stock[stock['Probability_of_Success'] > 0.7]
print(successful_trades)