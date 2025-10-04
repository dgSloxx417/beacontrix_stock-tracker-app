// Global reusable types for your app

// Props for WatchlistButton component
export interface WatchlistButtonProps {
    symbol: string;
    company?: string;
    isInWatchlist?: boolean;
    showTrashIcon?: boolean;
    type?: "button" | "icon";
    onWatchlistChange?: (symbol: string, added: boolean) => void;
}

// Props for StockDetails page
export interface StockDetailsPageProps {
    params: {
        symbol: string;
    };
}

// Shared stock type across app
export interface StockWithWatchlistStatus {
    symbol: string;
    name: string;       // ✅ add
    exchange: string;   // ✅ add
    type: string;       // ✅ add
    company?: string;   // optional, if you sometimes use "company"
    isInWatchlist?: boolean; // optional flag
}
