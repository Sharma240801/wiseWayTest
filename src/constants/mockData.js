export const mockDashboardApiResponse = {
  status: "success",
  data: {
    user: {
      id: "u_10291",
      profile: {
        name: "Alex Johnson",
        role: "Manager", // Admin | Manager | Viewer
        preferences: {
          theme: "dark", // may be undefined
          currency: "USD" // preferred display currency
        }
      }
    },
    stats: {
      summary: {
        users: {
          total: 12450,
          active: 8930,
          inactive: null // sometimes missing
        },
        revenue: {
          total: {
            amount: 184320.75,
            currency: "USD"
          },
          monthly: {
            current: {
              amount: 43210.5,
              currency: "EUR"
            },
            previous: {
              amount: 39800.25,
              currency: "EUR"
            }
            // growthPercentage NOT provided — must be derived
          }
        },
        conversion: {
          rate: 3.42,
          trend: "up"
        }
      },
      activity: {
        events: [
          {
            id: "e1",
            timestamp: "2025-09-01T10:32:00Z",
            type: "login"
          },
          {
            id: "e2",
            timestamp: "2025-09-01T11:01:00Z",
            type: "purchase",
            amount: 29.99,
            currency: "USD"
          },
          {
            id: "e3",
            timestamp: "2025-09-02T09:18:00Z",
            type: "login"
          },
          {
            id: "e4",
            timestamp: "2025-09-02T12:45:00Z",
            type: "purchase",
            amount: 49.99,
            currency: "EUR"
          }
        ]
      },
      platforms: [{
        name: "Mobile",
        breakdown: {
          ios: {
            users: 4300,
            activePercentage: 72
          },
          android: {
            users: 5200,
            activePercentage: 68
          },
          harmonyOS: {
            users: 300,
            activePercentage: 51
          }
        }
      },
      {
        name: "Web",
        breakdown: {
          desktop: {
            users: 2100,
            activePercentage: 61
          },
          mobileWeb: {
            users: 850,
            activePercentage: 57
          }
        }
      }
      ],
      regions: {
        top: {
          page: 1,
          pageSize: 3,
          total: 6,
          data: [
            {
              country: "USA",
              users: 4200,
              revenue: {
                amount: 78450.25,
                currency: "USD"
              }
            },
            {
              country: "India",
              users: 3800
              // revenue missing
            },
            {
              country: "Germany",
              users: 2100,
              revenue: {
                amount: 32100.5,
                currency: "EUR"
              }
            }
          ]
        }
      }
    }
  }
};
